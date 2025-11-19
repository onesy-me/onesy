import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJoinFilled = (props: IIcon) => {

  return (
    <Icon
      name='JoinFilled'

      short_name='Join'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M640-200q-28 0-54.5-5.5T534-221q59-54 92.5-120.5T660-480q0-72-33.5-138.5T534-739q25-10 51.5-15.5T640-760q117 0 198.5 81.5T920-480q0 117-81.5 198.5T640-200Zm-160-50q-55-38-87.5-98T360-480q0-72 32.5-132t87.5-98q55 38 87.5 98T600-480q0 72-32.5 132T480-250Zm-160 50q-117 0-198.5-81.5T40-480q0-117 81.5-198.5T320-760q28 0 54.5 5.5T426-739q-59 54-92.5 120.5T300-480q0 79 32.5 146.5T422-219q-24 9-49.5 14t-52.5 5Z"/>
    </Icon>
  );
};

IconMaterialJoinFilled.displayName = 'OnesyIconMaterialJoinFilled';

export default IconMaterialJoinFilled;
