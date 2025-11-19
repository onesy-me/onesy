import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialArrowRight = (props: IIcon) => {

  return (
    <Icon
      name='ArrowRight'

      short_name='ArrowRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-308q-8 0-14-5.5t-6-14.5v-304q0-9 6-14.5t14-5.5q2 0 14 6l145 145q5 5 7 10t2 11q0 6-2 11t-7 10L434-314q-3 3-6.5 4.5T420-308Z"/>
    </Icon>
  );
};

IconMaterialArrowRight.displayName = 'OnesyIconMaterialArrowRight';

export default IconMaterialArrowRight;
