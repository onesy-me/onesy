import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallReceivedFilled = (props: IIcon) => {

  return (
    <Icon
      name='CallReceivedFilled'

      short_name='CallReceived'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200v-400h80v264l464-464 56 56-464 464h264v80H200Z"/>
    </Icon>
  );
};

IconMaterialCallReceivedFilled.displayName = 'OnesyIconMaterialCallReceivedFilled';

export default IconMaterialCallReceivedFilled;
