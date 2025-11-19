import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialProblemFilled = (props: IIcon) => {

  return (
    <Icon
      name='ProblemFilled'

      short_name='Problem'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-320q17 0 28.5-11.5T320-360q0-17-11.5-28.5T280-400q-17 0-28.5 11.5T240-360q0 17 11.5 28.5T280-320Zm-40-120h80v-200h-80v200Zm160 80h320v-80H400v80Zm0-160h320v-80H400v80ZM80-160v-640h800v640H80Z"/>
    </Icon>
  );
};

IconMaterialProblemFilled.displayName = 'OnesyIconMaterialProblemFilled';

export default IconMaterialProblemFilled;
