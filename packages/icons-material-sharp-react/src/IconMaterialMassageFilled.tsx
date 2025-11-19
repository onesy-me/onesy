import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMassageFilled = (props: IIcon) => {

  return (
    <Icon
      name='MassageFilled'

      short_name='Massage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M220-419 80-760l240-120 80 120h241l279 280-77 77-333-189-110-8-4 60 93 7 130 73-39 80-360-39Zm-90 298-22-77 190-50q72-19 153-35.5T599-300q75 0 139.5 30T866-189l-54 59q-51-43-105.5-66.5T599-220q-64 0-141 16.5T319-171l-189 50Z"/>
    </Icon>
  );
};

IconMaterialMassageFilled.displayName = 'OnesyIconMaterialMassageFilled';

export default IconMaterialMassageFilled;
