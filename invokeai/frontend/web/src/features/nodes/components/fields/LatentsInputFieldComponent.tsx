import {
  LatentsInputFieldTemplate,
  LatentsInputFieldValue,
} from 'features/nodes/types/types';
import { memo } from 'react';
import { FieldComponentProps } from './types';

const LatentsInputFieldComponent = (
  props: FieldComponentProps<LatentsInputFieldValue, LatentsInputFieldTemplate>
) => {
  const { nodeId, field } = props;

  return null;
};

export default memo(LatentsInputFieldComponent);
