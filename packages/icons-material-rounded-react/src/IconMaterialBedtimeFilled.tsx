import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBedtimeFilled = (props: IIcon) => {

  return (
    <Icon
      name='BedtimeFilled'

      short_name='Bedtime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M524-40q-84 0-157.5-32t-128-86.5Q184-213 152-286.5T120-444q0-128 72-232t193-146q22-8 41 5.5t18 36.5q-3 85 27 162t90 137q60 60 137 90t162 27q26-1 38.5 17.5T903-305q-44 120-147.5 192.5T524-40Z"/>
    </Icon>
  );
};

IconMaterialBedtimeFilled.displayName = 'OnesyIconMaterialBedtimeFilled';

export default IconMaterialBedtimeFilled;
