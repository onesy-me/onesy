import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialViewWeekFilled = (props: IIcon) => {

  return (
    <Icon
      name='ViewWeekFilled'

      short_name='ViewWeek'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80-160v-640h213v640H80Zm294 0v-640h213v640H374Zm293 0v-640h213v640H667Z"/>
    </Icon>
  );
};

IconMaterialViewWeekFilled.displayName = 'OnesyIconMaterialViewWeekFilled';

export default IconMaterialViewWeekFilled;
