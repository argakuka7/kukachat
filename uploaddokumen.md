Feature Implementation: PDF Upload and Processing

Overview
We aim to enhance our application by enabling users to upload PDF files alongside existing image formats (JPEG and PNG). Additionally, once a PDF is uploaded, it should be processed by our selected Language Learning Model (LLM) for further analysis or actions. This feature will involve updates to both the frontend and backend components, ensuring seamless integration with our existing infrastructure, including Supabase for storage and our LLM for processing.

Objectives
- Extend File Upload Capabilities: Modify existing upload functionalities to accept PDF files.
- Validate PDF Files: Ensure uploaded PDFs meet size and format requirements.
- Store PDFs in Supabase: Upload and manage PDF files using Supabase Storage.
- Integrate LLM Processing: Automatically send uploaded PDFs to the LLM for processing.
- Handle Responses and Errors: Manage successful processing and handle any errors gracefully.
- Update User Interface: Allow users to upload PDFs and view processing results.

Tasks Breakdown
1. Update Environment Configuration
   - Responsible: Junior Engineer 1
   - Description: Ensure all necessary environment variables are correctly set for PDF processing and storage.
   - Steps:
     - Review .env.local to confirm Supabase keys and LLM API keys are present.
     - Add any additional environment variables if required for PDF processing.
   - Notes:
     - Ensure that sensitive information remains secure and is not exposed in version control.

2. Modify Backend Upload Validation
   - Responsible: Junior Engineer 2
   - Description: Update the file upload validation schema to accept PDF files.
   - Steps:
     - Locate the Upload Schema: Open app/(chat)/api/files/upload/route.ts.
     - Update the FileSchema.
   -    import { z } from 'zod';

   const FileSchema = z.object({
     file: z
       .instanceof(Blob)
       .refine((file) => file.size <= 5 * 1024 * 1024, {
         message: 'File size should be less than 5MB',
       })
       .refine((file) => ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type), {
         message: 'File type should be JPEG, PNG, or PDF',
       }),
   });:
     - Adjust the file size limit if necessary to accommodate larger PDFs.
     - Ensure that only necessary file types are allowed to maintain security.

3. Update File Upload Endpoint to Handle PDFs
   - Responsible: Junior Engineer 2
   - Description: Ensure the backend correctly handles PDF uploads and stores them in Supabase.
   - Steps:
     - Modify the Upload Function: In lib/supabase.ts, ensure the retryUpload function correctly handles PDF files.
        export async function uploadFileToSupabase(file: File): Promise<string> {
     try {
       const filename = `${Date.now()}-${file.name}`;
       const { data, error } = await supabaseAdmin.storage
         .from('documents') // Use a separate bucket for documents
         .upload(filename, file, {
           cacheControl: '3600',
           upsert: false,
         });

       if (error) {
         throw error;
       }

       const publicUrl = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/documents/${data.path}`;
       return publicUrl;
     } catch (error) {
       console.error('Error uploading file to Supabase:', error);
       throw error;
     }
   }
     - Ensure Supabase Bucket Exists: Verify that a documents bucket exists in Supabase Storage. If not, create one with appropriate public access settings.
   - Notes:
     - Using separate buckets for images and documents helps in organizing files.
     - Adjust bucket names and access policies as per project requirements.

4. Enhance Frontend File Input to Accept PDFs
   - Responsible: Junior Engineer 3
   - Description: Update the file input component to allow users to select PDF files.
   - Steps:
     - Locate the File Input Component: Open components/multimodal-input.tsx.
     - Update the accept Attribute.
        <input
     type="file"
     className="fixed -top-4 -left-4 size-0.5 opacity-0 pointer-events-none"
     ref={fileInputRef}
     multiple
     accept=".jpg,.jpeg,.png,.pdf" // Added .pdf
     onChange={handleFileChange}
     tabIndex={-1}
   />
     - Provide User Feedback for PDF Uploads: Update any UI elements to indicate successful PDF uploads. Optionally, display a PDF icon or preview.
   - Notes:
     - Ensure that the UI remains intuitive when handling multiple file types.
     - Consider file type-specific previews for a better user experience.

5. Integrate PDF Processing with LLM
   - Responsible: Junior Engineer 4
   - Description: After uploading a PDF, automatically send it to the LLM for processing.
   - Steps:
     - Create an API Route for LLM Processing: Create a new file app/(chat)/api/llm/process-pdf.ts.
        import { NextResponse } from 'next/server';
   import { supabaseAdmin } from '@/lib/supabase';
   import { processPdfWithLLM } from '@/lib/llm'; // Assume this is a utility function

   export async function POST(request: Request) {
     try {
       const { url } = await request.json();

       if (!url) {
         return NextResponse.json({ error: 'URL is required' }, { status: 400 });
       }

       // Send the PDF URL to the LLM for processing
       const llmResponse = await processPdfWithLLM(url);

       return NextResponse.json({ data: llmResponse });
     } catch (error) {
       console.error('Error processing PDF with LLM:', error);
       return NextResponse.json({ error: 'LLM processing failed' }, { status: 500 });
     }
   }
     - Implement the LLM Processing Function: In lib/llm.ts, add the processPdfWithLLM function.
        import fetch from 'node-fetch';

   export async function processPdfWithLLM(pdfUrl: string): Promise<any> {
     const response = await fetch('https://api.your-llm-provider.com/process', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // Example for OpenAI
       },
       body: JSON.stringify({ url: pdfUrl }),
     });

     if (!response.ok) {
       throw new Error(`LLM processing failed: ${response.statusText}`);
     }

     const data = await response.json();
     return data;
   }
     - Update File Upload Handler to Trigger LLM Processing: Modify components/multimodal-input.tsx to send the uploaded PDF URL to the LLM.
        const handleFileChange = useCallback(
     async (event: ChangeEvent<HTMLInputElement>) => {
       const files = Array.from(event.target.files || []);
       setUploadQueue(files.map((file) => file.name));

       try {
         const uploadPromises = files.map((file) => uploadFile(file));
         const uploadedAttachments = await Promise.all(uploadPromises);
         const successfullyUploadedAttachments = uploadedAttachments.filter(
           (attachment) => attachment !== undefined,
         );

         // Process each uploaded file with LLM
         const llmPromises = successfullyUploadedAttachments.map(async (attachment) => {
           if (attachment.contentType === 'application/pdf') {
             const response = await fetch('/api/llm/process-pdf', {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
               },
               body: JSON.stringify({ url: attachment.url }),
             });
             const result = await response.json();
             return { ...attachment, llmData: result.data };
           }
           return attachment;
         });

         const attachmentsWithLLM = await Promise.all(llmPromises);

         setAttachments((currentAttachments) => [
           ...currentAttachments,
           ...attachmentsWithLLM,
         ]);
       } catch (error) {
         console.error('Error uploading or processing files!', error);
       } finally {
         setUploadQueue([]);
       }
     },
     [setAttachments],
   );
   - :
     - Replace 'https://api.your-llm-provider.com/process' with the actual endpoint of your LLM provider.
     - Ensure that the LLM can handle PDF URLs and process them accordingly.
     - Handle sensitive data securely, especially when interacting with third-party APIs.

6. Update Supabase Storage Rules (If Necessary)
   - Responsible: Junior Engineer 5
   - Description: Ensure that the Supabase storage buckets have the correct access rules for PDF files.
   - Steps:
     - Access Supabase Dashboard: Log in to your Supabase account and navigate to the project.
     - Check Storage Buckets: Verify that the documents bucket (or the designated bucket for PDFs) exists. Ensure that the bucket has public read access if necessary.
     - Adjust Policies: If restricted access is required, update the storage policies to allow authenticated users to upload and read files.
   - Notes:
     - Properly securing storage buckets is crucial to prevent unauthorized access.
     - Review Supabase documentation for detailed guidance on storage policies.

7. Enhance User Interface for PDF Handling
   - Responsible: Junior Engineer 3
   - Description: Update frontend components to provide feedback and display information related to PDF uploads and LLM processing results.
   - Steps:
     - Display Uploaded PDF Information: In components/multimodal-input.tsx, modify the attachments display to handle PDFs.
        {attachments.map((attachment) => (
     <div key={attachment.name} className="attachment-item">
       {attachment.contentType === 'application/pdf' ? (
         <a href={attachment.url} target="_blank" rel="noopener noreferrer">
           <span>📄 {attachment.name}</span>
         </a>
       ) : (
         <img src={attachment.url} alt={attachment.name} className="attachment-image" />
       )}
       {attachment.llmData && (
         <div className="llm-result">
           {/* Display LLM processing results */}
           <pre>{JSON.stringify(attachment.llmData, null, 2)}</pre>
         </div>
       )}
     </div>
   ))}
     - Provide Upload Status Indicators: Show loading indicators while files are uploading or being processed. Display success or error messages based on the upload and processing outcomes.
   - Notes:
     - Ensure that the UI remains responsive and user-friendly.
     - Consider using icons or colors to differentiate between file types and statuses.

8. Testing and Validation
   - Responsible: Junior Engineer 6
   - Description: Thoroughly test the new PDF upload and processing feature to ensure reliability and security.
   - Steps:
     - Unit Testing: Write tests for the upload validation schema to ensure only allowed file types and sizes are accepted. Test the processPdfWithLLM function with mock responses.
     - Integration Testing: Test the entire upload flow from frontend to backend, including LLM processing. Ensure that PDFs are correctly uploaded to Supabase and that their URLs are accurately processed by the LLM.
     - End-to-End Testing: Simulate user interactions by uploading PDFs and verifying that processing results are displayed as expected. Test error scenarios, such as uploading unsupported file types or exceeding size limits.
   - Notes:
     - Utilize testing frameworks like Jest and React Testing Library for efficient testing.
     - Ensure that sensitive information is not exposed during testing.

9. Documentation and Code Reviews
   - Responsible: Junior Engineer 7
   - Description: Document the implemented feature and conduct code reviews to maintain code quality.
   - Steps:
     - Update Project Documentation: Add sections detailing the PDF upload and processing feature. Include usage instructions, API endpoints, and any configuration requirements.
     - Conduct Code Reviews: Submit the implemented code for peer review. Address any feedback or suggestions provided during the review process.
   - Notes:
     - Keeping documentation up-to-date is essential for future maintenance and onboarding.
     - Code reviews help in identifying potential issues and ensuring adherence to best practices.

Additional Considerations
- Security: Ensure that uploaded PDFs are scanned for malicious content if necessary. Implement appropriate security measures to protect against vulnerabilities.
- Performance: Monitor the performance impact of processing PDFs with the LLM, especially for large files. Optimize where possible.
- Scalability: Design the feature to handle an increasing number of PDF uploads without degrading performance.
- Error Handling: Implement comprehensive error handling to provide users with clear feedback in case of failures during upload or processing.

Summary
By following the tasks outlined above, we will successfully integrate PDF upload capabilities into our application, coupled with automated processing through our chosen LLM. This enhancement will provide users with greater flexibility in the types of files they can upload and benefit from intelligent processing of their documents.

Please proceed with the assigned tasks and reach out if you encounter any challenges or need further clarification.

---
Happy Coding!
