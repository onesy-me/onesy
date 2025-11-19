import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationOnFilled = (props: IIcon) => {

  return (
    <Icon
      name='LocationOnFilled'

      short_name='LocationOn'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 400Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Z"/>
    </Icon>
  );
};

IconMaterialLocationOnFilled.displayName = 'OnesyIconMaterialLocationOnFilled';

export default IconMaterialLocationOnFilled;
