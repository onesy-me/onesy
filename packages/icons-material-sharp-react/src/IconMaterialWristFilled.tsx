import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWristFilled = (props: IIcon) => {

  return (
    <Icon
      name='WristFilled'

      short_name='Wrist'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-84 244-280H40v-400h184l78-80h498v80H560v60h320v80H560v60h360v80H560v60h280v80H485l45 89-90 87Z"/>
    </Icon>
  );
};

IconMaterialWristFilled.displayName = 'OnesyIconMaterialWristFilled';

export default IconMaterialWristFilled;
