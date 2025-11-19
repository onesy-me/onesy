import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTask = (props: IIcon) => {

  return (
    <Icon
      name='Task'

      short_name='Task'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m438-240 226-226-58-58-169 169-84-84-57 57 142 142ZM160-80v-800h400l240 240v560H160Zm360-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z"/>
    </Icon>
  );
};

IconMaterialTask.displayName = 'OnesyIconMaterialTask';

export default IconMaterialTask;
