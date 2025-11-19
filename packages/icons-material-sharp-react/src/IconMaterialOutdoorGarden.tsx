import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOutdoorGarden = (props: IIcon) => {

  return (
    <Icon
      name='OutdoorGarden'

      short_name='OutdoorGarden'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-600l160-120 120 90 120-90 120 90 120-90 160 120v600H80Zm80-80h160v-480l-80-60-80 60v480Zm240 0h160v-480l-80-60-80 60v480Zm240 0h160v-480l-80-60-80 60v480Z"/>
    </Icon>
  );
};

IconMaterialOutdoorGarden.displayName = 'OnesyIconMaterialOutdoorGarden';

export default IconMaterialOutdoorGarden;
