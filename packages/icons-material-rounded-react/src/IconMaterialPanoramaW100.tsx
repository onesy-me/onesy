import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanoramaW100 = (props: IIcon) => {

  return (
    <Icon
      name='PanoramaW100'

      short_name='Panorama'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M192-212q-26 0-43-17t-17-43v-416q0-26 17-43t43-17h576q26 0 43 17t17 43v416q0 26-17 43t-43 17H192Zm0-28h576q12 0 22-10t10-22v-416q0-12-10-22t-22-10H192q-12 0-22 10t-10 22v416q0 12 10 22t22 10Zm256-92-52-60q-5-5-11.5-5t-11.5 6l-36 47q-6 8-2 16t13 8h272q9 0 13-8t-1-16l-72-97q-5-6-12-6t-12 6l-88 109Zm-288 92v-480 480Z"/>
    </Icon>
  );
};

IconMaterialPanoramaW100.displayName = 'OnesyIconMaterialPanoramaW100';

export default IconMaterialPanoramaW100;
