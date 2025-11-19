import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCleaning = (props: IIcon) => {

  return (
    <Icon
      name='Cleaning'

      short_name='Cleaning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-680 40-80v-40h-40v-80h280v80l-40 80H480v-40l-80 80h-40ZM320-80v-297l160-303h160v600H320Zm80-80h160v-440h-32L400-356v196Zm0 0h160-160Z"/>
    </Icon>
  );
};

IconMaterialCleaning.displayName = 'OnesyIconMaterialCleaning';

export default IconMaterialCleaning;
