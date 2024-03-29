import { Router } from 'express';
import * as NoteController from '../controllers/note.controller';

const router = new Router();

//Get all Notes
router.route('/notes').get(NoteController.getNote);

//Add a new Note
router.route('/notes').post(NoteController.addNote);

//Delete a Note by noteId
router.route('/notes/:noteId').delete(NoteController.deleteNote);

//Edit a Note by noteId
router.route('/notes/:noteId').put(NoteController.editNote);

export default router;
