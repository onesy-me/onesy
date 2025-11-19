import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMailAsterisk = (props: IIcon) => {

  return (
    <Icon
      name='MailAsterisk'

      short_name='MailAsterisk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480Zm0-40 320-200H160l320 200ZM80-160v-640h800v360h-80v-200L480-440 160-640v400h360v80H80ZM715-42l-70-40 46-78h-91v-80h91l-46-78 70-40 45 78 45-78 70 40-46 78h91v80h-91l46 78-70 40-45-78-45 78Z"/>
    </Icon>
  );
};

IconMaterialMailAsterisk.displayName = 'OnesyIconMaterialMailAsterisk';

export default IconMaterialMailAsterisk;
