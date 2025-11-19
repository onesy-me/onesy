import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlare = (props: IIcon) => {

  return (
    <Icon
      name='Flare'

      short_name='Flare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M40-440v-80h240v80H40Zm270-154-84-84 56-56 84 84-56 56Zm130-86v-240h80v240h-80Zm210 86-56-56 84-84 56 56-84 84Zm30 154v-80h240v80H680Zm-200 80q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm198 134-84-84 56-56 84 84-56 56Zm-396 0-56-56 84-84 56 56-84 84ZM440-40v-240h80v240h-80Z"/>
    </Icon>
  );
};

IconMaterialFlare.displayName = 'OnesyIconMaterialFlare';

export default IconMaterialFlare;
