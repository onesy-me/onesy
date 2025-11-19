import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilterFramesFilled = (props: IIcon) => {

  return (
    <Icon
      name='FilterFramesFilled'

      short_name='FilterFrames'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-720h240l160-160 160 160h240v720H80Zm80-80h640v-560H160v560Zm80-80v-400h480v400H240Z"/>
    </Icon>
  );
};

IconMaterialFilterFramesFilled.displayName = 'OnesyIconMaterialFilterFramesFilled';

export default IconMaterialFilterFramesFilled;
