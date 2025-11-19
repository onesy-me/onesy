import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScienceFilled = (props: IIcon) => {

  return (
    <Icon
      name='ScienceFilled'

      short_name='Science'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-51 0-72.5-45.5T138-250l222-270v-240h-40q-17 0-28.5-11.5T280-800q0-17 11.5-28.5T320-840h320q17 0 28.5 11.5T680-800q0 17-11.5 28.5T640-760h-40v240l222 270q32 39 10.5 84.5T760-120H200Z"/>
    </Icon>
  );
};

IconMaterialScienceFilled.displayName = 'OnesyIconMaterialScienceFilled';

export default IconMaterialScienceFilled;
