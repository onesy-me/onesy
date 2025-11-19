import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSdCardFilled = (props: IIcon) => {

  return (
    <Icon
      name='SdCardFilled'

      short_name='SdCard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-80v-560l240-240h400v800H160Zm200-440h80v-160h-80v160Zm120 0h80v-160h-80v160Zm120 0h80v-160h-80v160Z"/>
    </Icon>
  );
};

IconMaterialSdCardFilled.displayName = 'OnesyIconMaterialSdCardFilled';

export default IconMaterialSdCardFilled;
