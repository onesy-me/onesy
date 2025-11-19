import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTaskFilled = (props: IIcon) => {

  return (
    <Icon
      name='TaskFilled'

      short_name='Task'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-240 226-226-58-58-169 169-84-84-57 57 142 142ZM160-80v-800h400l240 240v560H160Zm360-520h200L520-800v200Z"/>
    </Icon>
  );
};

IconMaterialTaskFilled.displayName = 'OnesyIconMaterialTaskFilled';

export default IconMaterialTaskFilled;
