import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialIosShare = (props: IIcon) => {

  return (
    <Icon
      name='IosShare'

      short_name='IosShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-40v-600h200v80H240v440h480v-440H600v-80h200v600H160Zm280-280v-447l-64 64-56-57 160-160 160 160-56 57-64-64v447h-80Z"/>
    </Icon>
  );
};

IconMaterialIosShare.displayName = 'OnesyIconMaterialIosShare';

export default IconMaterialIosShare;
