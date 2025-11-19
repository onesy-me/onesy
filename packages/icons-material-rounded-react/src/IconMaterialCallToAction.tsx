import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallToAction = (props: IIcon) => {

  return (
    <Icon
      name='CallToAction'

      short_name='CallToAction'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Zm140-40h360q25 0 42.5-17.5T720-340q0-25-17.5-42.5T660-400H300q-25 0-42.5 17.5T240-340q0 25 17.5 42.5T300-280Z"/>
    </Icon>
  );
};

IconMaterialCallToAction.displayName = 'OnesyIconMaterialCallToAction';

export default IconMaterialCallToAction;
