import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChevronForwardFilled = (props: IIcon) => {

  return (
    <Icon
      name='ChevronForwardFilled'

      short_name='ChevronForward'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z"/>
    </Icon>
  );
};

IconMaterialChevronForwardFilled.displayName = 'OnesyIconMaterialChevronForwardFilled';

export default IconMaterialChevronForwardFilled;
