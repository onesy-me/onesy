import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHelpClinic = (props: IIcon) => {

  return (
    <Icon
      name='HelpClinic'

      short_name='HelpClinic'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280h80v-200h-80v200Zm40-280q17 0 28.5-11.5T520-600q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600q0 17 11.5 28.5T480-560ZM160-120v-480l320-240 320 240v480H160Zm80-80h480v-360L480-740 240-560v360Zm240-270Z"/>
    </Icon>
  );
};

IconMaterialHelpClinic.displayName = 'OnesyIconMaterialHelpClinic';

export default IconMaterialHelpClinic;
