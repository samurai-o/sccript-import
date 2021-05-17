import React from 'react';
import styled, { StyledInterface } from 'styled-components';
import classname from 'classnames';
const css: StyledInterface = (styled as any).default;
const Container = css.div<Pick<ImportLoadingState, "open">>`
    position: absolute;
    top: 0,
    left: 0,
    width: 100%,
    height: 100%,
    zIndex: 10000,
    transition: all 1s ease,
    background: #fff;
    '&.open': {
        opacity: 1;
    },
    '&.close': {
        opacity: 0;
    }
`

export type ImportLoadingProps = {
    children?: JSX.Element;
}

export type ImportLoadingState = {
    open: boolean;
}

/**
 * 包加载loading
 */
export class ImportLoading extends React.Component<ImportLoadingProps, ImportLoadingState, any> {
    constructor(props: ImportLoadingProps) {
        super(props);
        this.open = this.open.bind(this);
        this.state = {
            open: false, // 开启状态
        }
    }
    open() {
        this.setState({ open: true });

    }
    render() {
        const { open } = this.state;
        return (
            <Container open={open} className={classname({ open, close: !open })}>{this.props.children}</Container>
        );
    }
}