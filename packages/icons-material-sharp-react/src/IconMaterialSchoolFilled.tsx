import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSchoolFilled = (props: IIcon) => {

  return (
    <Icon
      name='SchoolFilled'

      short_name='School'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M840-280v-276L480-360 40-600l440-240 440 240v320h-80ZM480-120 200-272v-200l280 152 280-152v200L480-120Z"/>
    </Icon>
  );
};

IconMaterialSchoolFilled.displayName = 'OnesyIconMaterialSchoolFilled';

export default IconMaterialSchoolFilled;
