import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChevronRight = (props: IIcon) => {

  return (
    <Icon
      name='ChevronRight'

      short_name='ChevronRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/>
    </Icon>
  );
};

IconMaterialChevronRight.displayName = 'OnesyIconMaterialChevronRight';

export default IconMaterialChevronRight;
