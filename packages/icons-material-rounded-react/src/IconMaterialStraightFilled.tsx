import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStraightFilled = (props: IIcon) => {

  return (
    <Icon
      name='StraightFilled'

      short_name='Straight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m440-687-36 36q-11 11-27.5 11T348-652q-11-11-11-28t11-28l104-104q12-12 28-12t28 12l104 104q11 11 11.5 27.5T612-652q-11 11-28 11t-28-11l-36-35v527q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160v-527Z"/>
    </Icon>
  );
};

IconMaterialStraightFilled.displayName = 'OnesyIconMaterialStraightFilled';

export default IconMaterialStraightFilled;
