import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRollerShadesFilled = (props: IIcon) => {

  return (
    <Icon
      name='RollerShadesFilled'

      short_name='RollerShades'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-120v-80h80v-640h640v640h80v80H80Zm160-80h480v-240H520v72q14 10 22 25t8 33q0 29-20.5 49.5T480-240q-29 0-49.5-20.5T410-310q0-18 8-32.5t22-24.5v-73H240v240Z"/>
    </Icon>
  );
};

IconMaterialRollerShadesFilled.displayName = 'OnesyIconMaterialRollerShadesFilled';

export default IconMaterialRollerShadesFilled;
