import React$1 from 'react';
import { SandboxInfo } from '@codesandbox/sandpack-client';
import { MDXComponents } from 'mdx/types';
import { useSpring } from 'use-spring';

declare type HighlightedToken = {
    content: string;
    props: {
        style?: React.CSSProperties;
    };
};
declare type HighlightedLine = {
    tokens: HighlightedToken[];
};
declare type Code$1 = {
    lines: HighlightedLine[];
    lang: string;
};

declare type FocusString = string | null | undefined;

declare type AnnotationProps = {
    style?: React$1.CSSProperties;
    children: React$1.ReactNode;
    data: any;
    isInline: boolean;
};
declare type CodeAnnotation = {
    focus: string;
    Component?: (props: AnnotationProps) => React$1.ReactElement;
    data?: any;
};

declare type CodeStep = {
    code: Code$1;
    focus: FocusString;
    annotations?: CodeAnnotation[];
};

declare type TriggerPosition = `${number}px` | `${number}%`;
declare type GlobalConfig = {
    themeName: string;
    lineNumbers?: boolean;
    showCopyButton?: boolean;
    staticMediaQuery?: string;
    triggerPosition?: TriggerPosition;
    minZoom?: number;
    maxZoom?: number;
    horizontalCenter?: boolean;
};
declare type CodeSettings = {
    lineNumbers?: boolean;
    showCopyButton?: boolean;
    staticMediaQuery?: string;
    themeName?: string;
    triggerPosition?: TriggerPosition;
    showExpandButton?: boolean;
    parentHeight?: any;
    minColumns?: number;
    minZoom?: number;
    maxZoom?: number;
    horizontalCenter?: boolean;
    rows?: number | "focus" | (number | "focus")[];
    debug?: boolean;
};
declare type ElementProps = {
    style?: React.CSSProperties;
    className?: string;
};
declare type CodeConfigProps = {
    rows?: number | "focus" | (number | "focus")[];
    showCopyButton?: boolean;
    showExpandButton?: boolean;
    lineNumbers?: boolean;
    minZoom?: number;
    maxZoom?: number;
    horizontalCenter?: boolean;
};
declare type EditorPanel$1 = {
    tabs: string[];
    active: string;
    heightRatio: number;
};
declare type EditorStep$1 = {
    files: CodeFile$1[];
    northPanel: EditorPanel$1;
    southPanel?: EditorPanel$1;
    terminal?: string;
};
declare type CodeFile$1 = CodeStep & {
    name: string;
};

declare type SectionProps = {
    globalConfig: GlobalConfig;
    children: React$1.ReactNode;
    editorStep: EditorStep$1;
} & CodeConfigProps & ElementProps;
declare function Section({ children, className, style, editorStep, ...codeConfigProps }: SectionProps): JSX.Element;
declare function SectionCode({ globalConfig, ...codeConfigProps }: {
    globalConfig: GlobalConfig;
} & CodeConfigProps & ElementProps): JSX.Element;
declare function SectionLink({ focus, file, children, id, }: {
    focus: string;
    id: string;
    file?: string;
    children: React$1.ReactNode;
}): JSX.Element;

declare type Tab = {
    title: string;
    active: boolean;
    style: React$1.CSSProperties;
};
declare type OutputPanel = {
    tabs: Tab[];
    style: React$1.CSSProperties;
    children: React$1.ReactNode;
};
declare type EditorFrameProps = {
    northPanel: OutputPanel;
    southPanel?: OutputPanel | null;
    terminalPanel?: React$1.ReactNode;
    height?: number;
    northButton?: React$1.ReactNode;
    southButton?: React$1.ReactNode;
    onTabClick?: (filename: string) => void;
} & React$1.PropsWithoutRef<JSX.IntrinsicElements["div"]>;

declare type CodeFile = CodeStep & {
    name: string;
};
declare type EditorPanel = {
    tabs: string[];
    active: string;
    heightRatio: number;
};
declare type EditorStep = {
    files: CodeFile[];
    northPanel: EditorPanel;
    southPanel?: EditorPanel;
    terminal?: string;
};

declare type SpringConfig = Parameters<typeof useSpring>[1];
declare type DivProps = React$1.PropsWithoutRef<JSX.IntrinsicElements["div"]>;
declare type EditorProps = EditorStep & {
    frameProps?: Partial<EditorFrameProps>;
    codeConfig: CodeSettings;
    springConfig?: SpringConfig;
} & DivProps;
declare function EditorSpring({ northPanel, southPanel, files, terminal, springConfig, ...props }: EditorProps): JSX.Element;

declare type Props = {
    editorStep: EditorStep;
    globalConfig: GlobalConfig;
} & ElementProps & CodeConfigProps;
declare function Code(props: Props): JSX.Element;

declare type PreviewProps = {
    globalConfig: GlobalConfig;
    files: EditorStep["files"];
    presetConfig?: PresetConfig;
    children?: React$1.ReactNode;
    show?: string;
    frameless?: boolean;
} & ElementProps;
declare type PresetConfig = SandboxInfo;
declare function Preview({ globalConfig, files, presetConfig, show, children, frameless, className, style, ...rest }: PreviewProps): JSX.Element;

declare type SpotlightProps = {
    globalConfig: GlobalConfig;
    children: React$1.ReactNode;
    editorSteps: EditorStep[];
    presetConfig?: PresetConfig;
    hasPreviewSteps?: boolean;
    start?: number;
} & CodeConfigProps & ElementProps;
declare function Spotlight({ children, editorSteps, globalConfig, start, presetConfig, className, style, hasPreviewSteps, ...codeConfigProps }: SpotlightProps): JSX.Element;

declare type ScrollycodingProps = {
    globalConfig: GlobalConfig;
    children: React$1.ReactNode;
    editorSteps: EditorStep[];
    presetConfig?: PresetConfig;
    hasPreviewSteps?: boolean;
    staticMediaQuery?: string;
    start?: number;
} & CodeConfigProps & ElementProps;
declare function Scrollycoding(props: ScrollycodingProps): JSX.Element;

declare type CodeSlotProps = CodeConfigProps & ElementProps;
declare function CodeSlot(localProps: CodeSlotProps): JSX.Element;
declare function PreviewSlot(localProps: any): JSX.Element;

declare type SlideshowProps = {
    globalConfig: GlobalConfig;
    children: React$1.ReactNode;
    editorSteps: EditorStep[];
    hasPreviewSteps?: boolean;
    presetConfig?: PresetConfig;
    autoFocus?: boolean;
    start?: number;
    onChange?: (e: {
        index: number;
    }) => void;
    autoPlay?: number;
    loop?: boolean;
} & CodeConfigProps & ElementProps;
declare function Slideshow(props: SlideshowProps): JSX.Element;

declare function Annotation(): JSX.Element;
declare const annotationsMap: Record<string, CodeAnnotation["Component"]>;

declare function InlineCode({ className, globalConfig, children, code, ...rest }: {
    className: string;
    code: Code$1;
    children?: React$1.ReactNode;
    globalConfig: {
        themeName: string;
    };
}): JSX.Element;

declare function toggleStatic(): void;
declare function StaticToggle({ viewDynamicText, viewStaticText, }: {
    viewDynamicText?: string;
    viewStaticText?: string;
}): JSX.Element;
declare function useStaticToggle(): readonly [boolean, typeof toggleStatic];

declare type MiniBrowserStep = {
    /**
     * The url to display on the navigation bar.
     */
    url?: string;
    /**
     * Override the url used for the iframe and "Open in new tab" button.
     */
    loadUrl?: string;
    /**
     * Scale the content of the browser.
     */
    zoom?: number;
    /**
     * Prepend the current origin to the url.
     */
    prependOrigin?: boolean;
    /**
     * The content to display in the browser. If not provided, an iframe for the url will be displayed.
     */
    children?: React$1.ReactNode;
};

declare type Transition = "none" | "slide";
declare type MiniBrowserHikeProps = {
    progress?: number;
    backward?: boolean;
    steps?: MiniBrowserStep[];
    transition?: Transition;
} & React$1.PropsWithoutRef<JSX.IntrinsicElements["div"]>;

declare type MiniBrowserProps = Omit<MiniBrowserHikeProps, "progress" | "steps" | "backward"> & MiniBrowserStep;

declare function MiniBrowser({ url, loadUrl, prependOrigin, children, zoom, ...rest }: MiniBrowserProps): JSX.Element;

declare const CH: MDXComponents;

declare const internal: {
    MiniBrowser: typeof MiniBrowser;
    EditorSpring: typeof EditorSpring;
};

export { Annotation, CH, Code, CodeSlot, InlineCode, Preview, PreviewSlot, Scrollycoding, Section, SectionCode, SectionLink, Slideshow, Spotlight, StaticToggle, annotationsMap as annotations, internal, useStaticToggle };
