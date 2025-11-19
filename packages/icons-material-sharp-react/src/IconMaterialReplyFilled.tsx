import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplyFilled = (props: IIcon) => {

  return (
    <Icon
      name='ReplyFilled'

      short_name='Reply'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z"/>
    </Icon>
  );
};

IconMaterialReplyFilled.displayName = 'OnesyIconMaterialReplyFilled';

export default IconMaterialReplyFilled;
