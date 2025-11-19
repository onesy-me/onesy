import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWineBarFilled = (props: IIcon) => {

  return (
    <Icon
      name='WineBarFilled'

      short_name='WineBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-120v-80h120v-164q-86-14-143-80t-57-156v-240h480v240q0 90-57 156t-143 80v164h120v80H320Zm0-520h320v-120H320v120Z"/>
    </Icon>
  );
};

IconMaterialWineBarFilled.displayName = 'OnesyIconMaterialWineBarFilled';

export default IconMaterialWineBarFilled;
