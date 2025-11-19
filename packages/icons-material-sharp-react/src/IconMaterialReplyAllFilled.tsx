import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialReplyAllFilled = (props: IIcon) => {

  return (
    <Icon
      name='ReplyAllFilled'

      short_name='ReplyAll'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-280 80-520l240-240 57 56-184 184 184 184-57 56Zm480 80v-160q0-50-35-85t-85-35H433l144 144-57 56-240-240 240-240 57 56-144 144h247q83 0 141.5 58.5T880-360v160h-80Z"/>
    </Icon>
  );
};

IconMaterialReplyAllFilled.displayName = 'OnesyIconMaterialReplyAllFilled';

export default IconMaterialReplyAllFilled;
