import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRecentPatientFilled = (props: IIcon) => {

  return (
    <Icon
      name='RecentPatientFilled'

      short_name='RecentPatient'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q20 0 40 1.5t40 4.5v274H160Zm320-320q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM720 0v-200h-80v-240h240l-80 160h80L720 0Z"/>
    </Icon>
  );
};

IconMaterialRecentPatientFilled.displayName = 'OnesyIconMaterialRecentPatientFilled';

export default IconMaterialRecentPatientFilled;
