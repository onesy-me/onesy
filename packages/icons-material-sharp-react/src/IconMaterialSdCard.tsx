import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSdCard = (props: IIcon) => {

  return (
    <Icon
      name='SdCard'

      short_name='SdCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-520h80v-160h-80v160Zm120 0h80v-160h-80v160Zm120 0h80v-160h-80v160ZM160-80v-560l240-240h400v800H160Zm80-80h480v-640H434L240-606v446Zm0 0h480-480Z"/>
    </Icon>
  );
};

IconMaterialSdCard.displayName = 'OnesyIconMaterialSdCard';

export default IconMaterialSdCard;
