import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDroneW100 = (props: IIcon) => {

  return (
    <Icon
      name='DroneW100'

      short_name='Drone'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M212-212q0-63 35-112t91-67l-19-161H211v-168H93v-28h264v28H239v140h76l-3-28h335l-3 28h75v-140H601v-28h265v28H748v168H641l-19 161q56 18 91 67t35 112h-28q0-66-44-113t-109-47H392q-64 0-108 47t-44 113h-28Zm153-188h229l21-180H343l22 180Zm0 0h229-229Z"/>
    </Icon>
  );
};

IconMaterialDroneW100.displayName = 'OnesyIconMaterialDroneW100';

export default IconMaterialDroneW100;
