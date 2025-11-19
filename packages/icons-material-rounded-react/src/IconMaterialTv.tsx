import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTv = (props: IIcon) => {

  return (
    <Icon
      name='Tv'

      short_name='Tv'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-200q-33 0-56.5-23.5T80-280v-480q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v480q0 33-23.5 56.5T800-200H640v40q0 17-11.5 28.5T600-120H360q-17 0-28.5-11.5T320-160v-40H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
};

IconMaterialTv.displayName = 'OnesyIconMaterialTv';

export default IconMaterialTv;
