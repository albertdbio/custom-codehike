import { Theme } from '@code-hike/lighter';
import { Node } from 'unist';

declare type TriggerPosition = `${number}px` | `${number}%`;
declare type RemarkConfig = {
    theme: Theme;
    autoImport?: boolean;
    skipLanguages: string[];
    autoLink?: boolean;
    filepath?: string;
    lineNumbers?: boolean;
    showCopyButton?: boolean;
    staticMediaQuery?: string;
    triggerPosition?: TriggerPosition;
};

declare type CodeHikeConfig = RemarkConfig;

declare type VFile = {
    history: string[];
    cwd: string;
};
declare type Transformer = (node: Node, file: VFile) => Promise<void>;
declare type CodeHikeRemarkPlugin = (config: CodeHikeConfig) => Transformer;
declare const attacher: CodeHikeRemarkPlugin;

export { attacher as remarkCodeHike };
