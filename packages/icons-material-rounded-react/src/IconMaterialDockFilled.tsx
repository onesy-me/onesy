import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockFilled = (props: IIcon) => {

  return (
    <Icon
      name='DockFilled'

      short_name='Dock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-80q0-17 11.5-28.5T360-120h240q17 0 28.5 11.5T640-80q0 17-11.5 28.5T600-40H360q-17 0-28.5-11.5T320-80Zm0-120q-33 0-56.5-23.5T240-280v-560q0-33 23.5-56.5T320-920h320q33 0 56.5 23.5T720-840v560q0 33-23.5 56.5T640-200H320Zm0-200h320v-320H320v320Z"/>
    </Icon>
  );
};

IconMaterialDockFilled.displayName = 'OnesyIconMaterialDockFilled';

export default IconMaterialDockFilled;
