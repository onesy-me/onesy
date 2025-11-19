import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNavigationFilled = (props: IIcon) => {

  return (
    <Icon
      name='NavigationFilled'

      short_name='Navigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-240 222-130q-13 5-24.5 2.5T178-138q-8-8-10.5-20t2.5-25l273-615q5-12 15.5-18t21.5-6q11 0 21.5 6t15.5 18l273 615q5 13 2.5 25T782-138q-8 8-19.5 10.5T738-130L480-240Z"/>
    </Icon>
  );
};

IconMaterialNavigationFilled.displayName = 'OnesyIconMaterialNavigationFilled';

export default IconMaterialNavigationFilled;
