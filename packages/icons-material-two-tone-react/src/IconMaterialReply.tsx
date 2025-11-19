import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReply = (props: IIcon) => {

  return (
    <Icon
      name='Reply'

      short_name='Reply'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
    </Icon>
  );
};

IconMaterialReply.displayName = 'OnesyIconMaterialReply';

export default IconMaterialReply;
