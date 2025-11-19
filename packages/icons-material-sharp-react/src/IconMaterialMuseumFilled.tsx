import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMuseumFilled = (props: IIcon) => {

  return (
    <Icon
      name='MuseumFilled'

      short_name='Museum'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-80v-80h80v-360H80v-80l400-280 400 280v80h-80v360h80v80H80Zm240-160h80v-160l80 120 80-120v160h80v-280h-80l-80 120-80-120h-80v280Z"/>
    </Icon>
  );
};

IconMaterialMuseumFilled.displayName = 'OnesyIconMaterialMuseumFilled';

export default IconMaterialMuseumFilled;
