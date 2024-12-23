declare module 'prosemirror-schema-basic' {
  import { NodeSpec, MarkSpec, Schema } from 'prosemirror-model';
  
  interface BasicSchema extends Schema {
    nodes: {
      doc: NodeSpec;
      paragraph: NodeSpec;
      text: NodeSpec;
      heading: NodeSpec;
      blockquote: NodeSpec;
      horizontal_rule: NodeSpec;
      code_block: NodeSpec;
      hard_break: NodeSpec;
    };
    marks: {
      link: MarkSpec;
      em: MarkSpec;
      strong: MarkSpec;
      code: MarkSpec;
    };
  }

  export const schema: BasicSchema;
} 