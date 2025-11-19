import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaW100 = (props: IIcon) => {

  return (
    <Icon
      name='PanoramaW100'

      short_name='Panorama'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm158-80h332L548-456 448-332l-64-74-66 86Zm-158 80v-480 480Z"/>
    </Icon>
  );
};

IconMaterialPanoramaW100.displayName = 'OnesyIconMaterialPanoramaW100';

export default IconMaterialPanoramaW100;
