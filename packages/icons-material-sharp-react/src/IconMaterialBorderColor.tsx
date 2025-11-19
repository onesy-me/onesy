import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBorderColor = (props: IIcon) => {

  return (
    <Icon
      name='BorderColor'

      short_name='BorderColor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M80 0v-160h800V0H80Zm160-320h56l312-311-29-29-28-28-311 312v56Zm-80 80v-170l505-504 168 171-503 503H160Zm560-504-56-56 56 56ZM608-631l-29-29-28-28 57 57Z"/>
    </Icon>
  );
};

IconMaterialBorderColor.displayName = 'OnesyIconMaterialBorderColor';

export default IconMaterialBorderColor;
