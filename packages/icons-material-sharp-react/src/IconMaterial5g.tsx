import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial5g = (props: IIcon) => {

  return (
    <Icon
      name='5g'

      short_name='5g'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-280v-80h200v-80H120v-240h280v80H200v80h200v240H120Zm720-240v240H480v-400h360v80H560v240h200v-80H660v-80h180Z"/>
    </Icon>
  );
};

IconMaterial5g.displayName = 'OnesyIconMaterial5g';

export default IconMaterial5g;
