import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCleaningFilled = (props: IIcon) => {

  return (
    <Icon
      name='CleaningFilled'

      short_name='Cleaning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m360-680 40-80v-40h-40v-80h280v80l-40 80H480v-40l-80 80h-40ZM320-80v-297l160-303h160v600H320Z"/>
    </Icon>
  );
};

IconMaterialCleaningFilled.displayName = 'OnesyIconMaterialCleaningFilled';

export default IconMaterialCleaningFilled;
