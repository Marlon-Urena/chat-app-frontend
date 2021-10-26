import { Dialog, DialogProps } from '@mui/material';

export default function DialogAnimate(props: DialogProps) {
  return <Dialog {...props}>{props.children}</Dialog>;
}
