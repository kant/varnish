import React from 'react';
import styled from 'styled-components';
import { Modal as AntModal } from 'antd';
import { ModalProps } from 'antd/lib/modal';

import { Button, ButtonVariant } from './button';

interface Props extends ModalProps {
  okVariant?: ButtonVariant;
  cancelVariant?: ButtonVariant;
}

export class Modal extends React.Component<Props> {
  render() {
    const {
      cancelButtonProps,
      cancelText,
      cancelVariant,
      children,
      confirmLoading,
      footer,
      okButtonProps,
      okText,
      okVariant,
      onCancel,
      onOk,
      ...restProps
    } = this.props;
    return (
      <StyledAntModal
        {...restProps}
        footer={
          footer || [
            <Button
              key="back"
              variant={okVariant || 'default'}
              onClick={onCancel}
              {...cancelButtonProps}
            >
              {cancelText || 'Cancel'}
            </Button>,
            <Button
              key="submit"
              loading={confirmLoading}
              onClick={onOk}
              variant={cancelVariant || 'primary'}
              {...okButtonProps}
            >
              {okText || 'OK'}
            </Button>,
          ]
        }
      >
        {children}
      </StyledAntModal>
    );
  }
}

const StyledAntModal = styled(AntModal)`
  .ant-modal-close {
    display: none;
  }
  .ant-modal-header {
    background-color: ${props => props.theme.palette.background.light};
    border-bottom: 1px solid ${props => props.theme.palette.border.main};
    padding: ${props => props.theme.spacing.md};
  }
  .ant-modal-body {
    padding: ${props => props.theme.spacing.md};
  }
  .ant-modal-footer {
    border-top: none;
    text-align: left;
    padding: ${props => props.theme.spacing.md};
  }
`;
