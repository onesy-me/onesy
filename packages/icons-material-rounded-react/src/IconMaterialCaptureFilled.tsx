import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCaptureFilled = (props: IIcon) => {

  return (
    <Icon
      name='CaptureFilled'

      short_name='Capture'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm120-160h400q17 0 28.5-11.5T720-360v-240q0-17-11.5-28.5T680-640H280q-17 0-28.5 11.5T240-600v240q0 17 11.5 28.5T280-320Z"/>
    </Icon>
  );
};

IconMaterialCaptureFilled.displayName = 'OnesyIconMaterialCaptureFilled';

export default IconMaterialCaptureFilled;
