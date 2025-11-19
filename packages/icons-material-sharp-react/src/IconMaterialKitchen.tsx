import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialKitchen = (props: IIcon) => {

  return (
    <Icon
      name='Kitchen'

      short_name='Kitchen'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-640v-120h80v120h-80Zm0 360v-200h80v200h-80ZM160-80v-800h640v800H160Zm80-80h480v-360H240v360Zm0-440h480v-200H240v200Z"/>
    </Icon>
  );
};

IconMaterialKitchen.displayName = 'OnesyIconMaterialKitchen';

export default IconMaterialKitchen;
